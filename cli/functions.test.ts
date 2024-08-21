export const FUNCTIONS_JSON = `{
    "url": "https://test-convex-url.convex.cloud",
    "functions": [
      {
        "args": {
          "type": "object",
          "value": {}
        },
        "functionType": "Query",
        "identifier": "messages.js:list",
        "returns": {
          "type": "array",
          "value": {
            "type": "object",
            "value": {
              "_creationTime": {
                "fieldType": {
                  "type": "number"
                },
                "optional": false
              },
              "_id": {
                "fieldType": {
                  "tableName": "messages",
                  "type": "id"
                },
                "optional": false
              },
              "author": {
                "fieldType": {
                  "type": "string"
                },
                "optional": false
              },
              "body": {
                "fieldType": {
                  "type": "string"
                },
                "optional": false
              }
            }
          }
        },
        "visibility": {
          "kind": "public"
        }
      },
      {
        "args": {
          "type": "object",
          "value": {
            "author": {
              "fieldType": {
                "type": "string"
              },
              "optional": false
            },
            "body": {
              "fieldType": {
                "type": "string"
              },
              "optional": false
            }
          }
        },
        "functionType": "Mutation",
        "identifier": "messages.js:send",
        "returns": {
          "type": "null"
        },
        "visibility": {
          "kind": "public"
        }
      }
    ]
  }`;

test("setup", () => { });

