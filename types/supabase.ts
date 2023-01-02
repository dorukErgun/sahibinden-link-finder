export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      link: {
        Row: {
          id: number
          created_at: string | null
          listingNo: number | null
          link: string
        }
        Insert: {
          id?: number
          created_at?: string | null
          listingNo?: number | null
          link: string
        }
        Update: {
          id?: number
          created_at?: string | null
          listingNo?: number | null
          link?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
