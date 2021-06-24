  
async function newFormHandler(event) {
    event.preventDefault()
  
    const title = document.querySelector('input[name="post-title"]').value
    const blog = document.querySelector('textarea[name="post-blog"]').value
    console.log(title, blog)
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        blog
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  
    if (response.ok) {
      document.location.replace('/dashboard')
    } else {
      alert(response.statusText)
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler)