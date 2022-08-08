import { StaticImageData } from "next/image"

export interface IProduct {
    category : string,
    name : string,
    image : StaticImageData,
    price : number,
    description: string
}

export interface ProductProps {
    product: IProduct;
}