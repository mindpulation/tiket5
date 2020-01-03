import Index from './Component/Index';
import IndexAdmin from './Component/Admin/Index';

export const Routes = [
    {
        path: "/",
        component: Index,
    },            
    {
        path: "/admin",
        component: IndexAdmin, 
    }
];
