export interface ResponseModel  {
    id:string;
    object: string;
    created:number;
    model:string;
    choices:choice[];
    modelUsage:usage;
}
export interface editResponseModel  {
    object: string;
    created:number;
    choices:editChoice[];
    usage:usage;
}
export interface editChoice {
    text:string;
    index:number;
}
export interface choice {
    text:string;
    index:number;
    logprobs:any;
    finish_reason:string;
}

export interface usage {
    prompt_tokens:number;
    completion_tokens: number;
    total_tokens:number;
}

export interface ChatWithBot {
    person: string;
    response: string;
    cssClass:string;
    image:string;
}


