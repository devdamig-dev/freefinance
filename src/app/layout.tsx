import type {Metadata} from 'next';
import './globals.css';
import {AppProvider} from '@/components/app-provider';
export const metadata:Metadata={title:'Nexo Freelance OS',description:'Sistema personal de ingresos'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="es"><body><AppProvider>{children}</AppProvider></body></html>}
