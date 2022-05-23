import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'sedes',
    pathMatch: 'full'
  },
  {
    path: 'prueba',
    loadChildren: () => import('./pages/prueba/prueba.module').then(m => m.PruebaPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./ui/action-sheet/action-sheet.module').then(m => m.ActionSheetPageModule)
  },
  {
    path: 'accordion',
    loadChildren: () => import('./ui/accordion/accordion.module').then(m => m.AccordionPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./ui/alert/alert.module').then(m => m.AlertPageModule)
  },
  {
    path: 'badge',
    loadChildren: () => import('./ui/badge/badge.module').then(m => m.BadgePageModule)
  },
  {
    path: 'breadcrumb',
    loadChildren: () => import('./ui/breadcrumb/breadcrumb.module').then(m => m.BreadcrumbPageModule)
  },
  {
    path: 'button',
    loadChildren: () => import('./ui/button/button.module').then(m => m.ButtonPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./ui/card/card.module').then(m => m.CardPageModule)
  },
  {
    path: 'checkbox',
    loadChildren: () => import('./ui/checkbox/checkbox.module').then(m => m.CheckboxPageModule)
  },
  {
    path: 'chip',
    loadChildren: () => import('./ui/chip/chip.module').then(m => m.ChipPageModule)
  },
  {
    path: 'content',
    loadChildren: () => import('./ui/content/content.module').then(m => m.ContentPageModule)
  },
  {
    path: 'date-time-pickers',
    loadChildren: () => import('./ui/date-time-pickers/date-time-pickers.module').then(m => m.DateTimePickersPageModule)
  },
  {
    path: 'floating-action-button',
    loadChildren: () => import('./ui/floating-action-button/floating-action-button.module').then(m => m.FloatingActionButtonPageModule)
  },
  {
    path: 'grid',
    loadChildren: () => import('./ui/grid/grid.module').then(m => m.GridPageModule)
  },
  {
    path: 'infinite-scroll',
    loadChildren: () => import('./ui/infinite-scroll/infinite-scroll.module').then(m => m.InfiniteScrollPageModule)
  },
  {
    path: 'icons',
    loadChildren: () => import('./ui/icons/icons.module').then(m => m.IconsPageModule)
  },
  {
    path: 'input',
    loadChildren: () => import('./ui/input/input.module').then(m => m.InputPageModule)
  },
  {
    path: 'item',
    loadChildren: () => import('./ui/item/item.module').then(m => m.ItemPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./ui/list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'media',
    loadChildren: () => import('./ui/media/media.module').then(m => m.MediaPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./ui/menu/menu.module').then(m => m.MenuPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./ui/modal/modal.module').then(m => m.ModalPageModule)
  },
  {
    path: 'navigation',
    loadChildren: () => import('./ui/navigation/navigation.module').then(m => m.NavigationPageModule)
  },
  {
    path: 'popover',
    loadChildren: () => import('./ui/popover/popover.module').then(m => m.PopoverPageModule)
  },
  {
    path: 'progress-indicators',
    loadChildren: () => import('./ui/progress-indicators/progress-indicators.module').then(m => m.ProgressIndicatorsPageModule)
  },
  {
    path: 'radio',
    loadChildren: () => import('./ui/radio/radio.module').then(m => m.RadioPageModule)
  },
  {
    path: 'range',
    loadChildren: () => import('./ui/range/range.module').then(m => m.RangePageModule)
  },
  {
    path: 'refresher',
    loadChildren: () => import('./ui/refresher/refresher.module').then(m => m.RefresherPageModule)
  },
  {
    path: 'reorder',
    loadChildren: () => import('./ui/reorder/reorder.module').then(m => m.ReorderPageModule)
  },
  {
    path: 'routing',
    loadChildren: () => import('./ui/routing/routing.module').then(m => m.RoutingPageModule)
  },
  {
    path: 'searchbar',
    loadChildren: () => import('./ui/searchbar/searchbar.module').then(m => m.SearchbarPageModule)
  },
  {
    path: 'segment',
    loadChildren: () => import('./ui/segment/segment.module').then(m => m.SegmentPageModule)
  },
  {
    path: 'select',
    loadChildren: () => import('./ui/select/select.module').then(m => m.SelectPageModule)
  },
  {
    path: 'slides',
    loadChildren: () => import('./ui/slides/slides.module').then(m => m.SlidesPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./ui/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'toast',
    loadChildren: () => import('./ui/toast/toast.module').then(m => m.ToastPageModule)
  },
  {
    path: 'toggle',
    loadChildren: () => import('./ui/toggle/toggle.module').then(m => m.TogglePageModule)
  },
  {
    path: 'toolbar',
    loadChildren: () => import('./ui/toolbar/toolbar.module').then(m => m.ToolbarPageModule)
  },
  {
    path: 'typography',
    loadChildren: () => import('./ui/typography/typography.module').then(m => m.TypographyPageModule)
  },
  {
    path: 'laminas',
    loadChildren: () => import('./pages/laminas/laminas.module').then(m => m.LaminasPageModule)
  },
  {
    path: 'datatable',
    loadChildren: () => import('./datatable/datatable.module').then(m => m.DatatablePageModule)
  },
  {
    path: 'ofertas',
    loadChildren: () => import('./pages/ofertas/ofertas.module').then(m => m.OfertasPageModule)
  },
  {
    path: 'angulos',
    loadChildren: () => import('./pages/angulos/angulos.module').then(m => m.AngulosPageModule)
  },
  {
    path: 'pletinas',
    loadChildren: () => import('./pages/pletinas/pletinas.module').then(m => m.PletinasPageModule)
  },
  {
    path: 'cabillas',
    loadChildren: () => import('./pages/cabillas/cabillas.module').then(m => m.CabillasPageModule)
  },
  {
    path: 'vigas',
    loadChildren: () => import('./pages/vigas/vigas.module').then(m => m.VigasPageModule)
  },
  {
    path: 'tubos-estructurales',
    loadChildren: () => import('./pages/tubos-estructurales/tubos-estructurales.module').then(m => m.TubosEstructuralesPageModule)
  },
  {
    path: 'tubos-hp',
    loadChildren: () => import('./pages/tubos-hp/tubos-hp.module').then(m => m.TubosHpPageModule)
  },
  {
    path: 'category/:id_categoria/:slug_categoria/:banner_categoria',
    loadChildren: () => import('./pages/category/category/category.module').then(m => m.CategoryPageModule)
  },
  {
    path: 'sedes',
    loadChildren: () => import('./pages/sedes/sedes.module').then(m => m.SedesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
