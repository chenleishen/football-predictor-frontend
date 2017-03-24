var HOST = 'http://localhost:9200/';
var elasticsearch = require('elasticsearch');

var elasticClient = new elasticsearch.Client({
  host: HOST
});

function getEsClient() {
    return elasticClient;
}
exports.getEsClient = getEsClient;
