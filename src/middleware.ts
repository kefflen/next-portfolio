import createMiddleware from 'next-intl/middleware';
import { locales } from './app/types/locales'
 
export default createMiddleware({
  locales: locales,
 
  defaultLocale: 'pt'
});
 
export const config = {
  matcher: ['/', '/(pt|en)/:path*']
};