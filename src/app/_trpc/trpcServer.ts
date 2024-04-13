import { appRouter } from '@/trpc/index';
import { t } from '@/trpc/trpc';

const caller = t.createCallerFactory(appRouter);

export const trpcServer = () => {

    return caller({});
};