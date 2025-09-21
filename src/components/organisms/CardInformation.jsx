import { Card, CardContent, CardHeader, CardTitle } from "@/components/molecules/Card"
import {  MapPin, Clock, Phone } from "lucide-react"

const CardInformation = ({ address, openTime, phone }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Informasi Kontak</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex items-start">
          <MapPin className="w-5 h-5 mr-3 mt-0.5 text-muted-foreground" />
          <div>
            <p className="font-md font-sans">{address}</p>
          </div>
        </div>

        <div className="flex items-center">
          <Clock className="w-5 h-5 mr-3 text-muted-foreground" />
          <span className="font-sans">{openTime}</span>
        </div>

        <div className="flex items-center">
          <Phone className="w-5 h-5 mr-3 text-muted-foreground" />
          <span className="font-sans">{phone}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardInformation