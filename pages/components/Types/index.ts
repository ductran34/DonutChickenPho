import { StaticImageData } from "next/image"

export interface IProduct {
    category : string,
    section : string,
    name : string,
    image : StaticImageData,
    choice?: IChoice[],
    sides? : string,
    price?: number,
    description: string
}
export interface IChoice {
    price: number,
    pieces: number,
    sides?: string,
}
export interface ProductProps {
    product: IProduct;
}

export interface ISections {
    category : string,
    sections : string[],
}