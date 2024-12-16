export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  stock: number;
  images: string[];
  thumbnail: string;
  category: string;
  brand: string;
  discountPercentage: number;
  returnPolicy: string;
  shippingInformation: string;
  warrantyInformation: string;
  minimumOrderQuantity: number;
  tags: string[];
  availabilityStatus: string;
}
