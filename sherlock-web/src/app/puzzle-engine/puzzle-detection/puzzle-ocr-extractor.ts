import { AnalyzeFromImageData200Response, AnalyzeFromImageDataDefaultHeaders, AnalyzeFromImageDataDefaultResponse, ImageAnalysisClient, ImageAnalysisResultOutput } from "@azure-rest/ai-vision-image-analysis";
import createClient from "@azure-rest/ai-vision-image-analysis";
import { AzureKeyCredential } from '@azure/core-auth';
import 'dotenv';
import { configDotenv } from "dotenv";
import { request } from "http";
import { resolve } from "path";
import { metadata } from '../../layout';

export class PuzzleOCRExtractor {
    private readonly key?: string = process.env.VISION_KEY;
    private readonly endpoint?: string = process.env.VISION_ENDPOINT;
    private imageClient?: ImageAnalysisClient;

    constructor() {
        this.createImageAnalysisClient();
        configDotenv();
    }

    private createImageAnalysisClient() {
        if (!this.key || !this.endpoint) {
            throw new Error('API key or endpoint is undefined');
        }

        // Create Azure credentials and image analysis client
        try{
            const credential = new AzureKeyCredential(this.key);
            const client = createClient(this.endpoint, credential);
            this.imageClient = client;
        } 
        catch(e) {
            console.log('Failed to create image analysis client');
            throw e as Error;
        }
    }

    private async sendToAzureAI(url: string): Promise<AnalyzeFromImageData200Response | AnalyzeFromImageDataDefaultResponse> {
        if(!this.imageClient){
            throw new Error('Image client is undefined');
        }

        let response = await this.imageClient.path("/imageanalysis:analyze").post({
            body: {url: url},
            queryParameters: {features: ['Read']},
            contentType: 'application/json'
        });
        if(response.status == '200'){
            console.log(response.body["readResult"].blocks[0]["lines"]);
        }
        
        return response;
    }

    private convertAzureAIJSONTo2DMatrix(azureResponse: AnalyzeFromImageData200Response){
        // TODO: Design logic to convert API response JSON to 2D matrix.
        // Need to determine where puzzle strings end and word list string start
        try{
            let lines = azureResponse.body["readResult"].blocks[0]["lines"];
        }
        catch(e){
            console.log(e)
        }
    }

    public extractPuzzleFrom(url: string): void {
        let puzzleMatrix: string[][]= [];

        if(url === ''){
            console.log(' String is empty')
        } else {
            this.sendToAzureAI(url);
        }


        // return puzzleMatrix;
    }

}