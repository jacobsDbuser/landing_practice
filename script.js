document.querySelector('body').addEventListener('click', function (e) {
    var target = e.target.parentElement;
    if (target.hasAttribute('data-bs-toggle') && target.getAttribute('data-bs-toggle') === 'collapse') { 
        var collapsed = target.classList.contains('collapsed');
        target.classList[collapsed ? 'remove' : 'add']('collapsed');
        target.setAttribute('aria-expanded', collapsed);
        var collapsedTarget = document.querySelector(
            target.getAttribute('data-bs-target')
        );
        collapsedTarget.classList[collapsed ? 'add' : 'remove']('show');
    }
});