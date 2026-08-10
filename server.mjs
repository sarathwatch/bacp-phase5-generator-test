import http from 'node:http';
const port = Number(process.env.PORT || 3000);
const summary = {"project":"P5-GEN-TEST","modules":["core","crm"]};
http.createServer((request, response) => {
  response.setHeader('content-type', 'application/json');
  if (request.url === '/health') { response.end(JSON.stringify({ status: 'healthy', ...summary })); return; }
  response.statusCode = 200; response.end(JSON.stringify(summary));
}).listen(port, '0.0.0.0');
