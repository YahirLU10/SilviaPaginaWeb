<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

function domain_accepts_mail(string $domain): bool {
  $domain = strtolower(trim($domain));
  if ($domain === '') return false;
  if (!preg_match('/^[a-z0-9.-]+\.[a-z]{2,}$/', $domain)) return false;

  if (function_exists('checkdnsrr')) {
    if (checkdnsrr($domain, 'MX')) return true;
    if (checkdnsrr($domain, 'A')) return true;
    if (checkdnsrr($domain, 'AAAA')) return true;
  }

  return false;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'method_not_allowed']);
  exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!is_array($data)) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'invalid_json']);
  exit;
}

$name = trim((string)($data['name'] ?? ''));
$email = trim((string)($data['email'] ?? ''));
$message = trim((string)($data['message'] ?? ''));

if ($name === '' || $email === '' || $message === '') {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'missing_fields']);
  exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'invalid_email']);
  exit;
}

$atPos = strrpos($email, '@');
$domain = $atPos !== false ? substr($email, $atPos + 1) : '';

if (!domain_accepts_mail($domain)) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'email_domain_invalid']);
  exit;
}

$to = 'contacto@silviamx.com';
$subject = 'Nueva solicitud: Auditoría de Automatización Gratis';

$bodyLines = [
  "Nueva solicitud desde silviamx.com",
  "",
  "Nombre: {$name}",
  "Correo: {$email}",
  "",
  "Mensaje:",
  $message,
];

$body = implode("\n", $bodyLines);

$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/plain; charset=utf-8';
$headers[] = 'From: SilvIA Web <contacto@silviamx.com>';
$headers[] = 'Reply-To: ' . $email;

$sent = @mail($to, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'mail_failed']);
  exit;
}

$clientSubject = 'Recibimos tu solicitud - SilvIA';

$safeName = htmlspecialchars($name, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
$safeMessage = nl2br(htmlspecialchars($message, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8'));

$clientBody = '<!doctype html><html><body style="font-family: Arial, Helvetica, sans-serif; color:#111;">'
  . '<p>Hola ' . $safeName . ',</p>'
  . '<p>Gracias por solicitar tu <strong>Auditoría de Automatización</strong>. Ya recibimos tu mensaje y pronto nos pondremos en contacto contigo.</p>'
  . '<p><strong>Resumen de tu mensaje:</strong><br>' . $safeMessage . '</p>'
  . '<hr style="border:none;border-top:1px solid #ddd;margin:24px 0;">'
  . '<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;">'
  . '<tr>'
  . '<td style="vertical-align:top; padding-right:16px;">'
  . '<img src="https://silviamx.com/logocorreo.png" alt="SilvIA" width="120" style="display:block;border-radius:999px;">'
  . '</td>'
  . '<td style="vertical-align:top;">'
  . '<p style="margin:0;"><strong>Yahir Yojhary Lopez Urias</strong></p>'
  . '<p style="margin:4px 0 0 0;">Desarrollador Backend</p>'
  . '<p style="margin:4px 0 0 0;">+52 667 214 1808</p>'
  . '<p style="margin:4px 0 0 0;"><a href="mailto:yahir.lopez@silviamx.com">yahir.lopez@silviamx.com</a></p>'
  . '<p style="margin:16px 0 0 0;"><strong>Contacto:</strong></p>'
  . '<p style="margin:4px 0 0 0;"><a href="mailto:contacto@silviamx.com">contacto@silviamx.com</a></p>'
  . '<p style="margin:4px 0 0 0;">Oficina: +52 667 531 4688</p>'
  . '<p style="margin:4px 0 0 0;">Página web: <a href="https://silviamx.com">silviamx.com</a></p>'
  . '</td>'
  . '</tr>'
  . '</table>'
  . '</body></html>';

$clientHeaders = [];
$clientHeaders[] = 'MIME-Version: 1.0';
$clientHeaders[] = 'Content-type: text/html; charset=utf-8';
$clientHeaders[] = 'From: SilvIA <contacto@silviamx.com>';
$clientHeaders[] = 'Reply-To: contacto@silviamx.com';

@mail($email, $clientSubject, $clientBody, implode("\r\n", $clientHeaders));

echo json_encode(['ok' => true]);
