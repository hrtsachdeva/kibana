/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { compose } from './libs/compose/kibana';
import { initRestApi } from './rest_api/init_api';

export const initServerWithKibana = (hapiServer: any) => {
  const libsRequestFactory = compose(hapiServer);
  initRestApi(hapiServer, libsRequestFactory);
};