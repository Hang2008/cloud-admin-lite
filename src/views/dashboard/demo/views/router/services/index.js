import { createService } from '@/global/utils/services';
import apis from './apis';
const services = createService(apis, {
    config: {
        baseURL: 'https://api.apiopen.top/',
    },
});
services.loadList = function (...args) {
    return services.$loadList(...args).then((res) => {
        const result = [];
        res.result.forEach((item) => {
            item.channellist.forEach((channel) => {
                channel.thumb = channel.thumb || channel.avatar;
                channel.time = new Date() - 0;
                channel.cate_sname = channel.cate_sname || item.title;
            });
            result.push(...item.channellist);
        });
        return result;
    });
};
export default services;
