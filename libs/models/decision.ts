export class Decision {
  text: string
  topic: string
  hot?: boolean

  constructor(text:string, topic: string){
    this.text = text
    this.topic = topic
} 
}