import apiClient from "./client";

export interface Image {
  id: number;
  name?: string;
  url?: string;
  size?: string;
  type?: string;
  status?: string;
  uid?: string;
  percent?: number;
}

// GET /images — получение списка всех изображений
export const getImages = async () => {
  return apiClient.get<Image[]>('/images');
};

// GET /images/id — получение изображения по id
export const getImageById = async (id: number) => {
  return apiClient.get<Image>(`/images/${id}`);
};