import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const dynamicWords = [
    'MCS at UIUC',
    '软件开发工程师',
    'AI 爱好者'
  ];

  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = dynamicWords[wordIndex];
    let timeout = null;

    if (!isDeleting && displayText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && displayText === '') {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prevIndex) => (prevIndex + 1) % dynamicWords.length);
      }, 400);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          currentWord.slice(0, isDeleting ? displayText.length - 1 : displayText.length + 1)
        );
      }, isDeleting ? 60 : 120);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <div className="App">
      {/* Navigation Header */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#" className="logo">黄亦劼</a>
          <div className="nav-links">
            <a href="#news">最新动态</a>
            <a href="#projects">项目</a>
            <a href="#experience">经历</a>
            <a href="#education">教育</a>
            <a href="#skills">技能</a>
            <a href="#contact">联系</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-wrapper">
          <div className="hero-text">
            <h1>黄亦劼</h1>
            <p className="hero-dynamic">
              <span>{displayText}</span><span className="cursor" aria-hidden="true"></span>
            </p>
            <p className="hero-subtitle">策略 · 产品 · 开发</p>
            <p className="hero-desc">
              伊利诺伊大学香槟分校计算机科学硕士，
              莱斯大学计算机科学与数学双专业本科。
              拥有华为云核心网、新蓝网视频推荐及分布式爬虫开发经验，
              熟悉Python、Go、Kubernetes与后端系统开发，
              正寻求后端开发和AI相关岗位。
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">联系我</a>
              <a href="#" className="btn btn-secondary">📄 下载简历</a>
            </div>
          </div>
          <div className="hero-avatar">
            <div className="avatar-placeholder">
              {/* Avatar image goes here */}
            </div>
          </div>
        </div>
        <div className="scroll-indicator">↓ 滚动浏览</div>
      </section>

      {/* Main Content */}
      <main className="container">
        
        {/* Latest Updates Section */}
        <section id="news" className="section">
          <div className="section-header">
            <p className="section-label">最新动态</p>
            <h2 className="section-title">Latest Updates</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-date">2025/5</span>
              <p><strong>加入华为 - ICT云核心网</strong>，担任软件工程师(Python)，负责电信云IaaS层网络虚拟化功能开发</p>
            </div>
            <div className="timeline-item">
              <span className="timeline-date">2024/12</span>
              <p><strong>伊利诺伊大学厄巴纳香槟分校-硕士毕业</strong>，计算机科学专业，GPA 3.91/4.00</p>
            </div>
            <div className="timeline-item">
              <span className="timeline-date">2024/6</span>
              <p><strong>华为实习</strong>，参与Kubernetes存储管理和自适应限流系统开发</p>
            </div>
            <div className="timeline-item">
              <span className="timeline-date">2023/8</span>
              <p><strong>浙江媒体集团实习</strong>，设计并实现视频推荐微服务系统</p>
            </div>
            <div className="timeline-item">
              <span className="timeline-date">2023/5</span>
              <p><strong>莱斯大学-本科毕业</strong>，计算机科学与数学专业，GPA 3.95/4.00</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <div className="section-header">
            <p className="section-label">精选项目</p>
            <h2 className="section-title">Featured Work</h2>
          </div>
          <div className="projects-grid">
            
            <div className="project-card">
              <div className="project-image">
                <div className="image-placeholder">项目图片</div>
              </div>
              <div className="project-content">
                <p className="project-tag">分布式系统</p>
                <h3>电商评论爬取系统</h3>
                <p className="project-desc">
                  使用Scrapy-Redis架构设计分布式网页爬取系统，从多个电商平台收集产品评论和元数据。
                  开发基于Django的控制平台，实现任务监控和错误报告。
                </p>
                <div className="project-tech">
                  <span>Python</span>
                  <span>Scrapy</span>
                  <span>Redis</span>
                  <span>Django</span>
                  <span>MySQL</span>
                </div>
                <a href="#" className="project-link">查看详情 →</a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="image-placeholder">项目图片</div>
              </div>
              <div className="project-content">
                <p className="project-tag">全栈开发</p>
                <h3>奥运会数据网站</h3>
                <p className="project-desc">
                  使用东京2021奥运会数据，建立个性化搜索页面。实现完整的CRUD功能、用户登录、数据可视化。
                  设计ER-Diagram、优化数据库索引、设计存储过程，并在Google Cloud Platform部署。
                </p>
                <div className="project-tech">
                  <span>Flask</span>
                  <span>MySQL</span>
                  <span>JavaScript</span>
                  <span>GCP</span>
                  <span>DataViz</span>
                </div>
                <a href="#" className="project-link">查看详情 →</a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="image-placeholder">项目图片</div>
              </div>
              <div className="project-content">
                <p className="project-tag">AI/推荐系统</p>
                <h3>视频推荐微服务</h3>
                <p className="project-desc">
                  为浙江媒体集团设计并实现视频推荐微服务，处理每小时超过百万个短视频。
                  利用BERT生成向量嵌入，使用Faiss进行高效相似度搜索。结合MySQL和Redis实现低延迟访问。
                </p>
                <div className="project-tech">
                  <span>Python</span>
                  <span>FastAPI</span>
                  <span>BERT</span>
                  <span>Faiss</span>
                  <span>Redis</span>
                </div>
                <a href="#" className="project-link">查看详情 →</a>
              </div>
            </div>

          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section">
          <div className="section-header">
            <p className="section-label">工作经历</p>
            <h2 className="section-title">Experience</h2>
          </div>
          <div className="experience-timeline">
            
            <div className="exp-item">
              <div className="exp-marker"></div>
              <div className="exp-content">
                <div className="exp-header">
                  <h3>软件工程师 (Python)</h3>
                  <span className="exp-company">华为 - ICT云核心网</span>
                </div>
                <p className="exp-period">2025/5 - 至今 · 北京</p>
                <ul className="exp-highlights">
                  <li>负责电信云IaaS层网络虚拟化功能的迭代开发与优化</li>
                  <li>完成20余项缺陷修复，实现代码零缺陷上线</li>
                  <li>开发自动化规格核查工具，替代100余项人工核查</li>
                  <li>闭环上游及周边模块问题300余个，支撑系统稳定</li>
                </ul>
              </div>
            </div>

            <div className="exp-item">
              <div className="exp-marker"></div>
              <div className="exp-content">
                <div className="exp-header">
                  <h3>软件工程师 (Go)</h3>
                  <span className="exp-company">华为 - ICT云核心网</span>
                </div>
                <p className="exp-period">2024/6 - 2024/8 · 北京 (实习)</p>
                <ul className="exp-highlights">
                  <li>设计自适应限流系统，优化Kubernetes API请求管理</li>
                  <li>增强K8s存储管理器CI/CD流水线，集成单元测试</li>
                  <li>实现X.509双向认证，集成CertManager证书轮换</li>
                  <li>容器化Docker镜像，完成Linux环境部署</li>
                </ul>
              </div>
            </div>

            <div className="exp-item">
              <div className="exp-marker"></div>
              <div className="exp-content">
                <div className="exp-header">
                  <h3>软件工程师 (Python)</h3>
                  <span className="exp-company">浙江媒体集团 - 新蓝网</span>
                </div>
                <p className="exp-period">2023/5 - 2023/8 · 杭州 (实习)</p>
                <ul className="exp-highlights">
                  <li>设计并实现视频推荐微服务，处理每小时百万级短视频</li>
                  <li>利用BERT生成向量嵌入，Faiss高效相似度搜索</li>
                  <li>设计数据存储方案，MySQL关系查询+Redis低延迟访问</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="section">
          <div className="section-header">
            <p className="section-label">教育背景</p>
            <h2 className="section-title">Education</h2>
          </div>
          <div className="education-list">
            
            <div className="edu-item">
              <div className="edu-left">
                <p className="edu-year">2023 - 2024</p>
              </div>
              <div className="edu-right">
                <h3>伊利诺伊大学厄巴纳-香槟分校</h3>
                <p className="edu-degree">计算机科学 · 硕士</p>
                <p className="edu-location">美国伊利诺伊州厄巴纳</p>
                <p className="edu-highlight">🎖 GPA: 3.91/4.00 | 优秀生名录(Top 10%)</p>
              </div>
            </div>

            <div className="edu-item">
              <div className="edu-left">
                <p className="edu-year">2019 - 2023</p>
              </div>
              <div className="edu-right">
                <h3>莱斯大学 (美国Top 15)</h3>
                <p className="edu-degree">计算机科学 & 数学 · 双专业本科</p>
                <p className="edu-location">美国得克萨斯州休斯敦</p>
                <p className="edu-highlight">🎖 GPA: 3.95/4.00 | 优秀生名录(Top 10%) 2021-2022</p>
              </div>
            </div>

          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section">
          <div className="section-header">
            <p className="section-label">技能与工具</p>
            <h2 className="section-title">Skills & Tools</h2>
          </div>
          <div className="skills-grid">
            
            <div className="skill-group">
              <h4>编程语言</h4>
              <div className="skill-tags">
                <span className="tag">Python</span>
                <span className="tag">Go</span>
                <span className="tag">Java</span>
                <span className="tag">JavaScript</span>
                <span className="tag">C</span>
                <span className="tag">SQL</span>
              </div>
            </div>

            <div className="skill-group">
              <h4>云计算 & 容器化</h4>
              <div className="skill-tags">
                <span className="tag">Kubernetes</span>
                <span className="tag">OpenStack</span>
                <span className="tag">Docker</span>
                <span className="tag">AWS</span>
                <span className="tag">GCP</span>
              </div>
            </div>

            <div className="skill-group">
              <h4>框架 & 库</h4>
              <div className="skill-tags">
                <span className="tag">Django</span>
                <span className="tag">Flask</span>
                <span className="tag">FastAPI</span>
                <span className="tag">PyTorch</span>
                <span className="tag">TensorFlow</span>
                <span className="tag">Scrapy</span>
              </div>
            </div>

            <div className="skill-group">
              <h4>数据库 & 工具</h4>
              <div className="skill-tags">
                <span className="tag">MySQL</span>
                <span className="tag">Redis</span>
                <span className="tag">Git</span>
                <span className="tag">Linux</span>
              </div>
            </div>

          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section contact-section">
          <div className="section-header">
            <p className="section-label">联系我</p>
            <h2 className="section-title">Get in Touch</h2>
          </div>
          <p className="contact-intro">
            我正在寻找充满挑战的机会。如果您有任何建议或想交流，欢迎随时联系！
          </p>
          <div className="contact-methods">
            <a href="mailto:hyj20010301@163.com" className="contact-link">
              📧 hyj20010301@163.com
            </a>
            <a href="tel:+8613336020703" className="contact-link">
              📞 +86 133 3602 0703
            </a>
            <a href="https://github.com" className="contact-link" target="_blank" rel="noopener noreferrer">
              💻 GitHub
            </a>
            <a href="https://linkedin.com" className="contact-link" target="_blank" rel="noopener noreferrer">
              🔗 LinkedIn
            </a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 黄亦劼 · 用心设计的个人主页</p>
      </footer>
    </div>
  );
}

export default App;
