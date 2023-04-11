const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', function(e) {
    createTags(e.target.value);

    if(e.key === 'Enter') {
        setTimeout(function() {
            e.target.value = '';
        }, 10);

        randomSelect();
    }
});

function createTags(input) {
    const tags = input.split(',').filter(function(tag) {
        return tag.trim() !== '';
    }).map(function(tag) {
        return tag.trim();
    });

    tagsEl.innerHTML = '';

    tags.forEach(function(tag) {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    });
}

function randomSelect() {
    const times = 30;

    const interval = setInterval(function() {
        const randomTag = pickRandomTag();

        if (randomTag !== undefined) {
            highlightTag(randomTag);

            setTimeout(function() {
                unHighlightTag(randomTag);
            }, 100);
        }
    }, 100);

    setTimeout(function() {
        clearInterval(interval);

        setTimeout(function() {
            const randomTag = pickRandomTag();

            highlightTag(randomTag);
        }, 100);

    }, times * 100);
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
    tag.classList.add('highlight');
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight');
}
