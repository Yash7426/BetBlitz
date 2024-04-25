export default interface IRoom {
    title: string;
    _id?: string;
    imageUrl?: string;
    messages?:any[]
    participants?:any[]
    url?:string
}