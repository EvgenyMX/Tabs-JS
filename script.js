const tabs = (headerSelector, tabSelecter, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelecter),
          content = document.querySelectorAll(contentSelector);
    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });
        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
    }
    function showTabContent(i = 0) {
        content[i].style.display = 'block';
        tab[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();


    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target && (target.classList.contains(tabSelecter.replace(/\./,"")) || 
                target.parentNode.classList.contains(tabSelecter.replace(/\./,"")))) {
                    tab.forEach((item, i) => {
                        if(target === item || target.parentNode === item ){
                            hideTabContent();
                            showTabContent(i);
                        }
                    });
        }
    });
};
tabs('.tabs_1', '.tabs__nav-item', '.tabs__content-item', 'tab__nav-active');