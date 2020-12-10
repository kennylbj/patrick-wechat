import Taro from '@tarojs/taro'
// import { BASE_API_URL } from '../constants/common'

export default {
  fetchQuestionnaires: () => {
    const data = [
      {
        id: 1,
        title: '唐诗宋词三百首',
        description: '“唐诗宋词”一语，是唐诗与宋词的并称，唐诗与宋词是中国文学史上的两颗明珠，唐代被称为诗的时代，宋代被称为词的时代。词源于民间，始于唐，兴于五代，盛于两宋。宋代物质生活的丰富，人们对文化生活的追求也更加强烈。 唐代的诗人多是供皇室及其统治者御用的工具和玩物。宋代的词人已由被别人欣赏而一跃登上了政治舞台，成为宋代政治舞台上的主角。宋代，皇帝个个爱词，大臣个个是词人，政治家范仲淹、王安石、司马光、苏轼等都是著名词人，女词人李清照也成为一代词宗，名垂千古。全社会的认同和推崇，使宋词得以佳篇迭出，影响久远。',
        duration: 5,
        imageUrl: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1393093974,2959754031&fm=26&gp=0.jpg',
        questions: [
          {
            id: 1,
            title: '唐代诗人王昌龄《出塞》中，“但使龙城飞将在”的下一句是____？',
            single: true,
            options: [
              {
                id: 1,
                key: 'A',
                value: '不破楼兰终不还',
                score: 0,
              },
              {
                id: 2,
                key: 'B',
                value: '不教胡马度阴山',
                score: 1,
              },
              {
                id: 3,
                key: 'C',
                value: '轻舟已过万重山',
                score: 0,
              },
              {
                id: 4,
                key: 'D',
                value: '铜雀春深锁二乔',
                score: 0,
              }
            ]
          },
          {
            id: 2,
            title: '杜甫《登高》中，“万里悲秋常作客”的下一句是_______？',
            single: true,
            options: [
              {
                id: 1,
                key: 'A',
                value: '潦倒新停浊酒杯',
                score: 0,
              },
              {
                id: 2,
                key: 'B',
                value: '唯见长江天际流',
                score: 0,
              },
              {
                id: 3,
                key: 'C',
                value: '百年多病独登台',
                score: 1,
              },
              {
                id: 4,
                key: 'D',
                value: '万里长征人未还',
                score: 0,
              }
            ],
          },
          {
            id: 3,
            title: '唐代诗人李白的《行路难》中，“长风破浪会有时”的下一句是________？',
            single: true,
            options: [
              {
                id: 1,
                key: 'A',
                value: '直挂云帆济沧海',
                score: 1,
              },
              {
                id: 2,
                key: 'B',
                value: '将登太行雪满山',
                score: 0,
              },
              {
                id: 3,
                key: 'C',
                value: '拔剑四顾心茫然',
                score: 0,
              },
              {
                id: 4,
                key: 'D',
                value: '谁人更扫黄金台',
                score: 0,
              }
            ],
          }
        ]
      },
      {
        id: 2,
        title: '焦虑自评量表',
        description: '心理测试是一种比较先进的测试方法，它是指通过一系列手段，将人的某些心理特征数量化，来衡量个体心理因素水平和个体心理差异差异的一种科学测量方法。心理测试（测验）是指用科学设计的量表来测量观察不到的人格结构，也被称为潜变量测试。 通俗而言，心理测试是指通过一系列的科学方法来测量被评者的智力水平和个性方面差异的一种科学方法。心理测试（测验）一般用设计符合信效度的问卷方式进行，一个有用的心理测试必须是有效的（即，有证据支持指定的解释试验结果）和可靠的（即，内部一致的或给予时间，一致的结果的，等）。也就是说所有人需要平等对待，对测试问题的认知均等率是很重要的。',
        duration: 10,
        imageUrl: 'http://img0.imgtn.bdimg.com/it/u=1389166643,3626319833&fm=26&gp=0.jpg',
        questions: [
          {
            id: 1,
            title: '我觉得比平时容易紧张和着急',
            single: true,
            options: [
              {
                id: 1,
                key: 'A',
                value: '没有或很少时间',
                score: 1,
              },
              {
                id: 2,
                key: 'B',
                value: '少部分时间',
                score: 2,
              },
              {
                id: 3,
                key: 'C',
                value: '相当多时间',
                score: 3,
              },
              {
                id: 4,
                key: 'D',
                value: '绝大部分或全部时间',
                score: 4,
              }
            ]
          },
          {
            id: 2,
            title: '我无缘无故地感到害怕',
            single: true,
            options: [
              {
                id: 1,
                key: 'A',
                value: '没有或很少时间',
                score: 1,
              },
              {
                id: 2,
                key: 'B',
                value: '少部分时间',
                score: 2,
              },
              {
                id: 3,
                key: 'C',
                value: '相当多时间',
                score: 3,
              },
              {
                id: 4,
                key: 'D',
                value: '绝大部分或全部时间',
                score: 4,
              }
            ]
          },
          {
            id: 3,
            title: '我容易心里烦乱或觉得惊恐',
            single: true,
            options: [
              {
                id: 1,
                key: 'A',
                value: '没有或很少时间',
                score: 1,
              },
              {
                id: 2,
                key: 'B',
                value: '少部分时间',
                score: 2,
              },
              {
                id: 3,
                key: 'C',
                value: '相当多时间',
                score: 3,
              },
              {
                id: 4,
                key: 'D',
                value: '绝大部分或全部时间',
                score: 4,
              }
            ]
          },
          {
            id: 4,
            title: '我觉得我可能将要发疯',
            single: true,
            options: [
              {
                id: 1,
                key: 'A',
                value: '没有或很少时间',
                score: 1,
              },
              {
                id: 2,
                key: 'B',
                value: '少部分时间',
                score: 2,
              },
              {
                id: 3,
                key: 'C',
                value: '相当多时间',
                score: 3,
              },
              {
                id: 4,
                key: 'D',
                value: '绝大部分或全部时间',
                score: 4,
              }
            ]
          },
          {
            id: 5,
            title: '我觉得一切都很好，也不会发生什么不幸',
            single: true,
            options: [
              {
                id: 1,
                key: 'A',
                value: '没有或很少时间',
                score: 1,
              },
              {
                id: 2,
                key: 'B',
                value: '少部分时间',
                score: 2,
              },
              {
                id: 3,
                key: 'C',
                value: '相当多时间',
                score: 3,
              },
              {
                id: 4,
                key: 'D',
                value: '绝大部分或全部时间',
                score: 4,
              }
            ]
          },
        ]
      }
    ];
    // mock delay 1000ms
    return new Promise(resolve => setTimeout(() => resolve(data), 1000));
  },
  completeQuestionnaire: questionnaireId => {
    console.log('complete', questionnaireId);
    const result = {
      title: 'ok',
      content: 'You have completed the questionnaire',
    };
    return new Promise(resolve => setTimeout(() => resolve(result), 1000));
  }
}
