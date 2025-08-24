import { create } from "zustand";
import axios from "axios";
const baseUrl = import.meta.env.VITE_API_URL;

export interface Product {
  id: number;
  title: string;
  brand: string;
  images: string[];
  price: number;
  discountPercentage: number;
  category: string;
  description?: string;
  availabilityStatus?: string;
  shippingInformation?: string;
  rating?: number;
  reviews?: string[];
}

interface ProductState {
  products: Product[];
  setProducts: (products: Product[]) => void;

  category: string;
  setCategory: (category: string) => void;

  loaded: boolean;
  setLoaded: (loaded: boolean) => void;

  productDetails?: Product;
  setProductDetails: (productDetails: Product) => void;

  selectedImgId: number;
  setSelectedImgId: (selectedImgId: number) => void;

  fetchProducts: () => Promise<void>;

  fetchProductDetails: (params: number) => Promise<void>;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),

  category: "all",
  setCategory: (category) => set({ category }),

  loaded: false,
  setLoaded: (loaded) => set({ loaded }),

  productDetails: undefined,
  setProductDetails: (productDetails) => set({ productDetails }),

  selectedImgId: 0,
  setSelectedImgId: (selectedImgId) => set({ selectedImgId }),

  fetchProducts: async () => {
    const response = await axios.get(`${baseUrl}`);
    set({ products: response.data.products });
  },

  fetchProductDetails: async (params) => {
    const response = await axios.get(`${baseUrl}/${params}`);
    set({ productDetails: response.data, loaded: true });
  },
}));
