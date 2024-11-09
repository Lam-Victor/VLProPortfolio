import { test, expect } from '@playwright/test';

test.afterEach(async ({ page }) => {
  // Close the browser after each test
  await page.close();
});

test('Home Page Elements Load', async ({ page }) => {
  // Navigate to Homepage
  await page.goto('/VLProPortfolio/blog');

  // Expect a title "to contain" a substring
  await test.step(`Title Check`, async () => {
    await expect(page).toHaveTitle(/Blog • Victor Lam/);
  });

  // Header Elements Visible
  await test.step('Header Element Visible', async () => {
    await expect(page.getByLabel('Brand')).toBeVisible();
    await expect(page.getByLabel('Brand')).toContainText('resume');
    await expect(page.getByRole('link', { name: 'Blog'})).toBeVisible();
    await expect(page.getByText('Tools')).toBeVisible();
  })

  // Body Element Visible
  await test.step('Body Elements Visible', async () => {
    await expect(page.getByRole('link', { name: 'Back' })).toBeVisible();
    await expect(page.locator('[aria-pwLoc="blog"]')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Tags' })).toBeVisible();
    await expect(page.locator('[aria-pwLoc="Blog post list"]')).toBeVisible();
  })

  // Footer Element Visible
  await test.step('Footer Element Visible', async () => {
    await expect(page.getByText('© 2024 Victor Lam. All rights')).toBeVisible();
    await expect(page.locator('a[href="https://www.linkedin.com/in/victor-lam-3769524"]')).toBeVisible();
  })
});

// test('Blog Link Navigates to Blog Listing Page', async ({ page }) => {
//   // Navigate to Homepage
//   await page.goto('/VLProPortfolio');

//   const blogLinkElement = page.getByText('Blog');
//   const blogUrl = await blogLinkElement.getAttribute('href');
//   const expectedBlogUrl: string = '/VLProPortfolio/blog'

//   await expect(blogLinkElement).toBeVisible();
//   await expect(blogUrl).toBe(expectedBlogUrl)
    
//   await blogLinkElement.click();

//   const currentURL = await page.url(); 
//   await expect(currentURL).toBe('http://localhost:4321/VLProPortfolio/blog')
// });
