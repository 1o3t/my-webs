// 移动端菜单切换
const menuButton = document.querySelector('.md\:hidden button');
if (menuButton) {
    menuButton.addEventListener('click', function() {
        // 这里可以添加移动端菜单的切换逻辑
        console.log('Menu button clicked');
    });
}

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 卡片悬停效果
const cards = document.querySelectorAll('.card-hover');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.classList.add('shadow-lg');
        this.style.transform = 'translateY(-4px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.classList.remove('shadow-lg');
        this.style.transform = 'translateY(0)';
    });
});

// 页面加载动画
window.addEventListener('load', function() {
    const fadeElements = document.querySelectorAll('section');
    fadeElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// 初始化页面样式
document.addEventListener('DOMContentLoaded', function() {
    // 设置初始样式
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
});

// 分类筛选功能
const filterButtons = document.querySelectorAll('.flex-wrap button');
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // 移除所有按钮的活跃状态
        filterButtons.forEach(btn => {
            btn.classList.remove('bg-primary', 'text-white');
            btn.classList.add('bg-white', 'text-gray-700');
        });
        
        // 添加当前按钮的活跃状态
        this.classList.remove('bg-white', 'text-gray-700');
        this.classList.add('bg-primary', 'text-white');
        
        // 这里可以添加实际的筛选逻辑
        console.log('Filter clicked:', this.textContent.trim());
    });
});