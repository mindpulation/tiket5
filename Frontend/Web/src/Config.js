import Index from './Component/Client/Index';
import IndexAdmin from './Component/Admin/Index';

export const Routes = [
    {
        path: "/regis",
        component: Index,
    },            
    {
        path: "/admin",
        component: IndexAdmin, 
    },
];
