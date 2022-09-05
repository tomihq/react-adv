import { lazy, LazyExoticComponent } from "react";
import { NoLazyLoad } from "../01-lazyload/pages/NoLazyLoad";


type JSXComponent = () => JSX.Element;

interface Route{
    to: string,
    path: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string
}

const LazyLayout = lazy(()=> import(/*webpackChunkName: "LazyLayout" */'../01-lazyload/layout/LazyLayout'));

export const routes: Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload/',
        Component: LazyLayout,
        name: 'Lazy Layout'
    },
    {
        to: '/no-lazy',
        path: '/nolazy',
        Component: NoLazyLoad,
        name: 'No Lazy'
    },
    

];

