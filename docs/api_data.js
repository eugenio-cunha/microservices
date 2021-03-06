define({ "api": [
  {
    "type": "get",
    "url": "/ping",
    "title": "Testa a acessibilidade de um microsserviço em um host.",
    "version": "1.0.0",
    "name": "GetAPI",
    "group": "API",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "body",
            "description": "<p>Horário que a requisição foi respondida no servidor.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"pong\": \"2020-02-05T15:39:43.587Z\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/routes.ts",
    "groupTitle": "API"
  }
] });
