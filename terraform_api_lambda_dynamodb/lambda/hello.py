import json
import boto3
import datetime

translate = boto3.client(service_name="translate")

dynamodb_translate_history_tbl = boto3.resource("dynamodb").Table("example")

def lambda_handler(event, context):
    input_text = event["queryStringParameters"]["input_text"]

    response = translate.translate_text(
        Text=input_text, SourceLanguageCode="ja", TargetLanguageCode="en"
    )

    output_text = response.get("TranslatedText")

    dynamodb_translate_history_tbl.put_item(
        Item={
            "timestamp": datetime.datetime.now().strftime("%Y%m%d%H%M%S"),
            "input_text": input_text,
            "output_text": output_text,
        }
    )

    return {
        "statusCode": 200,
        "body": json.dumps({"output_text": output_text}),
        "isBase64Encoded": False,
        "headers": {},
    }
