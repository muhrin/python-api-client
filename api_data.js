define({ "api": [
  {
    "type": "get",
    "url": "/download/facet",
    "title": "download-facet",
    "description": "<p>Download the data satisfying the given aspect or a combination of aspects. Currently, only crystalline structures (S-entries) are supported.</p>",
    "name": "Download_Facet",
    "group": "Download",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Key",
            "description": "<p>API key obtained via the <a href=\"https://mpds.io/#modal/menu\">MPDS Platform GUI</a></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "\"Key:a_long_and_secret_string\"",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "json",
            "optional": false,
            "field": "q",
            "description": "<p>A serialized JSON object containing any reasonable combination of 8 search aspects: <strong>physical properties</strong>, <strong>chemical elements</strong>, <strong>materials classes</strong>, <strong>crystal system</strong>, <strong>chemical formula</strong>, <strong>publication author</strong>, <strong>prototype system</strong>, <strong>space group</strong>. They are defined with the object properties <strong>props</strong>, <strong>elements</strong>, <strong>classes</strong>, <strong>lattices</strong>, <strong>formulae</strong>, <strong>authors</strong>, <strong>protos</strong> and <strong>sgs</strong>, correspondingly.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "allowedValues": [
              "10",
              "100",
              "500",
              "1000"
            ],
            "optional": false,
            "field": "pagesize",
            "defaultValue": "10",
            "description": "<p>The number of hits per page (pagination).</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "page",
            "defaultValue": "0",
            "description": "<p>The page number, in the selected or default pagination. Counts from 0. Defaults to the first page, which has number 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "json",
              "cif"
            ],
            "optional": false,
            "field": "fmt",
            "defaultValue": "json",
            "description": "<p>Output data format.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of parameter q:",
          "content": "{\"elements\":\"Es-Fm-Md\",\"classes\":\"perovskite,conductor,\",\"sgs\":\"Pm-3m\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Response",
            "description": "<p>in <strong>json</strong> format, containing the following properties: <strong>out</strong> (list i.e. array of S-entries), <strong>npages</strong> (number of pages in the selected or default pagination), <strong>count</strong> (total number of hits), and <strong>error</strong> (should be none).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful response with two S-entries:",
          "content": "{\"error\": null, \"out\":[{\"S_entry_one_properties\":\"S_entry_one_values\"}, {\"S_entry_two_properties\":\"S_entry_two_values\"}], \"npages\": 1, \"count\": 2}",
          "type": "json"
        },
        {
          "title": "Successful response (nothing found):",
          "content": "{\"error\": null, \"out\":[], \"npages\": 0, \"count\": 0}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "Response",
            "description": "<p>with an <strong>error</strong> property.</p>"
          },
          {
            "group": "Error 4xx",
            "type": "string",
            "optional": false,
            "field": "Responses",
            "description": "<p>with the status codes <em>400</em> (wrong parameters) or <em>403</em> (forbidden) may have no JSON body. Generally, checking the response status code should be always done first.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "codebase/api/app_download/__init__.py",
    "groupTitle": "Download"
  }
] });