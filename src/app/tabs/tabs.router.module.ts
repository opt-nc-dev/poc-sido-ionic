import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'geolocation',
                children: [
                    {
                        path: '',
                        loadChildren: '../tab-geolocation/tab-geolocation.module#Tab1PageModule'
                    }
                ]
            },
            {
                path: 'flash-code-barre',
                children: [
                    {
                        path: '',
                        loadChildren: '../tab-flash-code-barre/tab-flash-code-barre.module#Tab2PageModule'
                    }
                ]
            },
            {
                path: 'signature',
                children: [
                    {
                        path: '',
                        loadChildren: '../tab-signature/tab3.module#Tab3PageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/geolocation',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/geolocation',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
