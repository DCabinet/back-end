import { Injectable, Scope } from '@nestjs/common';

export const jobs: Array<new (...args: any[]) => unknown> = [];

export function HostedJob() {
   return function (target: any) {
      Injectable({ scope: Scope.TRANSIENT })(target);

      jobs.push(target);
   };
}
