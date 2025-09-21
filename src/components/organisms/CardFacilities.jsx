import {  Card, CardContent, CardHeader, CardTitle } from "@/components/molecules/Card";

const CardFacilities = ({ facilities }) => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Fasilitas</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {facilities.map((facility, index) => (
            <div key={index} className="flex items-center">
              <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
              <span className="text-sm md:text-md">{facility}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CardFacilities;
