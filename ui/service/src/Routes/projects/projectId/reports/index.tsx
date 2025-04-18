import { RouteObject } from 'react-router-dom'
import { injectReportsAPI } from 'evidently-ui-lib/routes-components/snapshots/data'
import { api } from 'api/RemoteApi'

const { loader } = injectReportsAPI({ api })

////////////////////
// children routes
////////////////////

import ReportRoute from './reportId'

export default {
  id: 'reports',
  path: 'reports',
  lazy: async () => {
    const { SnapshotTemplate, ...rest } = await import(
      'evidently-ui-lib/routes-components/snapshots'
    )

    const Component = () => <SnapshotTemplate type="report" />

    return { ...rest, Component }
  },
  loader,
  children: [ReportRoute]
} satisfies RouteObject
