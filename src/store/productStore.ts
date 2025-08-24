import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
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
interface QuantityItem {
  id: number;
  quantity: number;
}

interface ProductState {
  products: Product[];
  setProducts: (products: Product[]) => void;

  category: string;
  setCategory: (category: string) => void;

  loaded: boolean;
  setLoaded: (loaded: boolean) => void;

  showToast: boolean;
  setShowToast: (showToast: boolean) => void;

  productDetails?: Product;
  setProductDetails: (productDetails: Product) => void;

  selectedImgId: number;
  setSelectedImgId: (selectedImgId: number) => void;

  cartProducts: Product[];
  addToCart: (product: Product) => void;
  deleteFromCart: (product: Product, productQuantity: number) => void;

  quantity: QuantityItem[];

  fetchProducts: () => Promise<void>;

  fetchProductDetails: (params: number) => Promise<void>;
}

export const useProductStore = create<ProductState>()(
  persist(
    (set) => ({
      products: [],
      setProducts: (products) => set({ products }),

      category: "all",
      setCategory: (category) => set({ category }),

      loaded: false,
      setLoaded: (loaded) => set({ loaded }),

      showToast: false,
      setShowToast: (showToast) => set({ showToast }),

      productDetails: undefined,
      setProductDetails: (productDetails) => set({ productDetails }),

      selectedImgId: 0,
      setSelectedImgId: (selectedImgId) => set({ selectedImgId }),

      cartProducts: [],
      addToCart: (product: Product) => {
        set((state) => {
          const exist = state.cartProducts.some((p) => p.id == product.id);
          if (!exist) {
            return {
              cartProducts: [...state.cartProducts, product],
              quantity: [...state.quantity, { id: product.id, quantity: 1 }],
              showToast: true,
            };
          } else {
            return {
              cartProducts: state.cartProducts,
              quantity: state.quantity.map((q) =>
                q.id === product.id ? { ...q, quantity: q.quantity + 1 } : q
              ),
              showToast: true,
            };
          }
        });
        setTimeout(() => {
          set({ showToast: false });
        }, 1000);
      },

      deleteFromCart: (product: Product, productQuantity: number) =>
        set((state) => {
          if (productQuantity > 1) {
            return {
              quantity: state.quantity.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: productQuantity - 1 }
                  : item
              ),
            };
          } else {
            return {
              cartProducts: state.cartProducts.filter(
                (p) => p.id !== product.id
              ),
              quantity: state.quantity.filter((item) => item.id !== product.id),
            };
          }
        }),

      quantity: [],

      fetchProducts: async () => {
        const response = await axios.get(`${baseUrl}`);
        set({ products: response.data.products });
      },

      fetchProductDetails: async (params) => {
        const response = await axios.get(`${baseUrl}/${params}`);
        set({ productDetails: response.data, loaded: true });
      },
    }),
    {
      name: "cart-products",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        cartProducts: state.cartProducts,
        quantity: state.quantity,
      }),
    }
  )
);
