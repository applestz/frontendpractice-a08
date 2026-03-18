import Link from "next/link"
import Card from "./Card"

export default async function VenueCatalog({venueJson} : {venueJson:Object}) {
    const venueJsonReady = await venueJson
    return (
        <>
            <div style={{margin:"20px", display:"flex", flexDirection:"row",
                flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
                    {
                        venueJsonReady.data.map((venueItem:Object)=>(
                            <Link href={`/venue/${venueItem.id}`} className="w-1/5" key={venueItem.id}>
                                <Card venueName={venueItem.name} imgSrc={venueItem.picture}/>
                            </Link>
                        ))
                    }
            </div>
        </>
    )
}