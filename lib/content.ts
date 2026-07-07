export type Language = "en" | "zh";

export const content = {
  en: {
    nav: {
      about: "About",
      services: "Services",
      approach: "Approach",
      contact: "Contact",
      redNote: "Red Note",
      youtube: "YouTube"
    },
    hero: {
      eyebrow: "Maia Wang Life Coaching",
      title: "Life Coaching for Clarity, Growth, and Self-Discovery",
      subtitle:
        "Helping thoughtful, ambitious people reconnect with themselves, clarify what matters, and move forward with steadiness and intention.",
      primaryCta: "Book a Free Intro Call",
      secondaryCta: "Contact Me"
    },
    about: {
      label: "About Me",
      title: "A grounded space for reflection, clarity, and honest change.",
      body: [
        "Hi, I am Maia Wang. My path has been shaped by studying in China, Japan, the UK, and the US, living across cultures, and moving between Chinese, Japanese, and English-speaking environments.",
        "Professionally, I have worked full-time in both China and the US, across technical and non-technical roles. As someone who moved from a humanities background into tech, I understand the uncertainty, courage, and identity questions that can come with reinvention.",
        "My interest in life coaching grew slowly and personally. I studied counseling, went through more than 100 counseling sessions, became deeply devoted to self-exploration, and gained a great deal from that inner work. I then spent two years receiving coaching myself before deciding to become a coach, and I am now in systematic coaching training.",
        "I understand how disorienting transition can feel, even when life looks successful from the outside. Career questions, identity shifts, relocation, ambition, burnout, and the quiet desire for a more aligned life can all arrive at once."
      ],
      highlights: [
        "Education across China, Japan, the UK, and the US",
        "Fluent in Chinese, Japanese, and English",
        "Full-time work experience in China and the US",
        "Technical and non-technical career experience",
        "Counseling study and 100+ counseling sessions",
        "Two years of receiving coaching before becoming a coach",
        "Ongoing systematic coaching training"
      ]
    },
    services: {
      label: "Services",
      title: "Coaching support for the season you are in.",
      cards: [
        {
          title: "1:1 Life Coaching",
          description:
            "Ongoing personal coaching for thoughtful self-reflection, emotional steadiness, and meaningful action.",
          bestFor:
            "Best for people who want consistent support while navigating change, uncertainty, or inner growth.",
          format: "Format: 50-minute online sessions, weekly or biweekly.",
          cta: "Explore 1:1 Coaching"
        },
        {
          title: "Career & Life Transition Coaching",
          description:
            "A focused coaching container for career crossroads, relocation, cultural transitions, identity shifts, or designing your next chapter.",
          bestFor:
            "Best for people feeling between countries, industries, roles, or directions and wanting a clearer way forward.",
          format: "Format: 4 to 8 session package, online.",
          cta: "Start a Transition Conversation"
        },
        {
          title: "Self-Discovery & Clarity Session",
          description:
            "A single deep-dive session to untangle what feels unclear and reconnect with your values, needs, and priorities.",
          bestFor:
            "Best for people who want a reflective reset before making a decision or beginning a new phase.",
          format: "Format: 75-minute online clarity session.",
          cta: "Book a Clarity Session"
        }
      ]
    },
    approach: {
      label: "My Approach",
      title: "Gentle depth, practical movement.",
      intro:
        "My coaching style is warm, reflective, and collaborative. I will not tell you who to become. I will help you listen more deeply to what is already true, then translate insight into steady next steps.",
      items: [
        {
          title: "Deep Listening",
          text: "We slow down enough for your real questions, patterns, and desires to become easier to hear."
        },
        {
          title: "Reflective Questioning",
          text: "Thoughtful questions help you examine assumptions, widen perspective, and find your own language."
        },
        {
          title: "Values Clarification",
          text: "We identify what genuinely matters to you, especially when outside expectations feel loud."
        },
        {
          title: "Emotional Support",
          text: "You get a steady, compassionate space for uncertainty, grief, ambition, fear, and hope."
        },
        {
          title: "Action Planning",
          text: "Insights become small, realistic experiments and next steps that fit your actual life."
        }
      ]
    },
    contact: {
      label: "Contact",
      title: "Begin with a simple conversation.",
      intro:
        "Share a little about what you are navigating. I will get back to you soon about next steps or a free intro call.",
      name: "Name",
      email: "Email",
      topic: "What would you like support with?",
      message: "Message",
      submit: "Send Message",
      success: "Thank you. Your message has been noted, and this demo form is ready to connect to email later.",
      direct: "Prefer email? Reach me at",
      placeholderName: "Your name",
      placeholderEmail: "you@example.com",
      placeholderTopic: "Life transition, career clarity, self-discovery...",
      placeholderMessage: "Tell me what feels important right now."
    },
    footer: {
      copyright: "All rights reserved.",
      email: "maiaworld@163.com"
    }
  },
  zh: {
    nav: {
      about: "关于我",
      services: "服务",
      approach: "方法",
      contact: "联系",
      redNote: "小红书",
      youtube: "YouTube"
    },
    hero: {
      eyebrow: "Maia Wang 人生教练",
      title: "陪伴你找回清晰方向，实现成长，探索真实的自己。",
      subtitle:
        "帮助正在自我探索、职业迷茫、关系变化或人生转折中的人，重新找到方向感、内在稳定感和行动力。",
      primaryCta: "预约免费初次咨询",
      secondaryCta: "联系我"
    },
    about: {
      label: "关于我",
      title: "一个可以诚实停下来、看清自己、慢慢前进的空间。",
      body: [
        "你好，我是 Maia Wang。",
        "我曾在中国、日本、英国和美国学习、生活，也长期穿梭于中文、日语和英语三种语言与文化之间。这些跨文化经历，让我不断思考身份认同、归属感、期待与选择，也让我对“一个人如何在不同人生阶段重新认识自己”有很深的体感。",
        "职业上，我先后在中国和美国工作，既做过非技术岗位，也经历过从文科转向软件工程的职业转型。我很熟悉那种站在人生路口的感受：一边努力向前，一边不断追问——我真正想成为怎样的人？我想过怎样的生活？",
        "我对 life coaching 的兴趣，并不是突然产生的。多年来，我持续系统学习并接受心理咨询，累计超过 100 节，在决定成为 life coach 之前，有过两年的个人 coaching 经历。在这个过程中，我逐渐学会更理解自己、面对内在冲突、梳理真正重要的价值观，并把这些觉察一步步转化为生活中的选择与行动。",
        "我选择成为一名 coach，不是因为我找到了所有答案，而是因为我一直走在探索答案的路上。正因为这些亲身经历，我越来越相信，一个好的陪伴者，并不是替别人做决定，而是帮助对方更清楚地听见自己真正的声音。",
        "现在，我正在接受系统的专业 coaching 训练，希望把一路走来的学习、体验和实践，带给更多正在经历人生转折的人。",
        "我尤其理解那些正在经历职业转型、自我探索，或在人生重要转折点寻找方向的人。很多时候，外在看起来一切顺利，内在却可能同时面对职业选择、身份变化、关系、野心、倦怠，以及那个反复出现的问题：我真正想要怎样的人生？",
        "我希望为你提供一个安全、真诚、不带评判的空间。在这里，我们不会急着寻找标准答案，而是一起探索那些真正属于你的答案，帮助你带着更多清晰、力量和行动，走向下一段人生。"
      ],
      highlights: []
    },
    services: {
      label: "服务内容",
      title: "为你所处的人生阶段，提供清晰而温柔的支持。",
      cards: [
        {
          title: "1:1 人生教练",
          description:
            "持续的一对一支持，陪你进行自我觉察、情绪整理，并把重要的洞察转化为行动。",
          bestFor:
            "适合正在经历变化、不确定感，或希望更深入认识自己的人。",
          format: "形式：50 分钟线上 session，可每周或隔周进行。",
          cta: "了解 1:1 Coaching"
        },
        {
          title: "职业与人生转折 Coaching",
          description:
            "针对职业十字路口、跨文化转换、搬迁适应、身份变化，或下一阶段人生设计的聚焦支持。",
          bestFor:
            "适合觉得自己卡在不同国家、行业、角色、方向或生活阶段之间，想找到更清晰前路的人。",
          format: "形式：4 到 8 次线上 package。",
          cta: "开启转折期对话"
        },
        {
          title: "自我探索与清晰度 Session",
          description:
            "一次深度梳理，帮助你厘清模糊感，重新连接自己的价值观、需求和优先级。",
          bestFor:
            "适合在做决定或进入新阶段前，希望获得一次深度 reset 的人。",
          format: "形式：75 分钟线上清晰度 session。",
          cta: "预约清晰度 Session"
        }
      ]
    },
    approach: {
      label: "我的方法",
      title: "有深度的倾听，也有可落地的行动。",
      intro:
        "我的 coaching 风格是温和、反思性、合作式的。我不会告诉你应该成为谁，而是陪你更深地听见真实的自己，并把洞察转化为适合你生活的下一步。",
      items: [
        {
          title: "深度倾听",
          text: "我们放慢速度，让真正的问题、模式和渴望有空间浮现出来。"
        },
        {
          title: "反思性提问",
          text: "通过有质量的问题，看见假设、拓宽视角，并找到属于你自己的表达。"
        },
        {
          title: "价值观澄清",
          text: "在外界期待很嘈杂的时候，辨认什么对你而言真的重要。"
        },
        {
          title: "情绪支持",
          text: "为不确定、失落、野心、害怕和希望，提供稳定而有共情的空间。"
        },
        {
          title: "行动计划",
          text: "把洞察转化成小而真实的实验和下一步，让改变可以发生在你的实际生活里。"
        }
      ]
    },
    contact: {
      label: "联系我",
      title: "从一次简单的对话开始。",
      intro:
        "你可以简单分享目前正在经历什么。我会尽快回复你，一起看看下一步是否适合安排免费初次咨询。",
      name: "姓名",
      email: "邮箱",
      topic: "你想咨询的问题",
      message: "留言",
      submit: "发送",
      success: "谢谢你。这个演示表单已记录提交状态，之后可以接入真实邮件发送。",
      direct: "也可以直接发邮件到",
      placeholderName: "你的名字",
      placeholderEmail: "you@example.com",
      placeholderTopic: "人生转折、职业清晰度、自我探索...",
      placeholderMessage: "告诉我此刻对你来说重要的事情。"
    },
    footer: {
      copyright: "版权所有。",
      email: "maiaworld@163.com"
    }
  }
} as const;
