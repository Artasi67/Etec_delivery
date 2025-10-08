import { LatLng } from "react-native-maps"

export type Entrega = {
    id: string,
    cliente:string,
    endereco: string,
    status: "pendente" | "ok",
    coord: LatLng
}