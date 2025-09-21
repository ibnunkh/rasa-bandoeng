import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/molecules/Card";
import { Utensils, Coffee } from "lucide-react";

const CardListMenu = ({ menu }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Daftar Menu</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="relative space-y-3">
          <div className="flex items-center gap-2">
            <Coffee className="w-8 h-8 text-muted-foreground" />
            <span className="font-semibold font-raleway">Minuman</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {menu.minuman.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-3 border border-white/20 rounded-lg"
              >
                <span className="font-md font-raleway">{item.name}</span>
                <span className="font-semibold">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative space-y-3">
          <div className="flex items-center gap-2">
            <Utensils className="w-8 h-8 text-muted-foreground" />
            <span className="font-semibold font-raleway">Makanan</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {menu.makanan.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-3 border border-white/20 rounded-lg"
              >
                <span className="font-md font-raleway">{item.name}</span>
                <span className="font-semibold">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardListMenu;
