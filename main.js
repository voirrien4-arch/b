// Delta Gold - App Bootstrap
// Entry point: loads dashboard UI modules with error handling

try {
  const { initDashboard } = await import('./ui/dashboard.js');
  const root = document.getElementById('app');
  if (root) {
    window.__dgLoaded = true;
    initDashboard(root);
  }
} catch (err) {
  console.error('Delta Gold — Module load failed:', err);
  window.__dgLoaded = true; // prevent timeout fallback from overriding
  const root = document.getElementById('app');
  if (root) {
    var msg = (err && err.message) ? err.message : 'Impossible de charger les modules JavaScript';
    root.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;min-height:100vh;flex-direction:column;gap:16px;padding:20px;font-family:-apple-system,system-ui,sans-serif;text-align:center;max-width:420px;margin:0 auto">'
      + '<p style="font-size:48px;margin:0">❌</p>'
      + '<p style="color:#E9EDEF;font-size:17px;font-weight:700;margin:0">Erreur de chargement</p>'
      + '<p style="color:#8696A0;font-size:13px;line-height:1.6;margin:0">' + msg + '</p>'
      + '<p style="color:#8696A0;font-size:12px;margin:12px 0 0">'
      + 'Fichiers requis: ui/dashboard.js, ui/chat-view.js, ui/commands-view.js, ui/tools-view.js, images.js</p>'
      + '<p style="margin:16px 0 0">'
      + '<a href="/api/status" style="color:#DAA520;font-size:13px;text-decoration:underline">'
      + 'Tester l\'API → /api/status</a></p></div>';
  }
}
