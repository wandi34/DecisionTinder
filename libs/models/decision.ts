export class Decision {
  text: string
  visible: boolean
  hot?: boolean

  constructor(text:string, visible:boolean){
    this.text = text
    this.visible = visible
} 
}