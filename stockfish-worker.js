// stockfish-worker.js
// wrapper بسيط: يحمل stockfish-18-lite ويفعّل وضع Worker تلقائياً
// عندما يُحمَّل عبر importScripts، الملف يكتشف أنه داخل Worker
// ويضبط onmessage تلقائياً للتعامل مع أوامر UCI

self.importScripts('stockfish-18-lite.js');
