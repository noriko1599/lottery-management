const routes = [{
    path: '/dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [{
        path: 'member',
        component: () => import('pages/member.vue')
      },
      {
        path: 'purchase',
        component: () => import('pages/purchase.vue')
      }
    ]
  },
  {
    path: `*`,
    redirect: `/dashboard/member`
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
