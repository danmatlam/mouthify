export interface IAccion {
  id: number;
  buttonText: string;
  url: string;
  isForward: boolean;
}

export interface IContenido {
  id: number;
  slug: string;
  icon: string;
  titulo: string;
  subtitulo: string;
  clip: string;
  descripcion: string;
  acciones: IAccion[];
}
