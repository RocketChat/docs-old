

desc 'Check links for site running on localhost:4000'
task :check_links do
  require 'anemone'

  puts 'Crawling links'

  Anemone.crawl('http://localhost:4000/', :discard_page_bodies => true, :threads => 4, :depth_limit => 2) do |anemone|
    anemone.after_crawl do |store|
      broken = Hash.new { |h, k| h[k] = [] }

      puts 'Checking links'
      
      store.each_value do |page|
        print '.'
        
        if page.code != 200
          referrers = store.pages_linking_to(page.url)
          
          referrers.each do |referrer|
            broken[referrer] << page
          end
        end
      end
      
      puts "\n\nPages with broken links:"
      
      broken.each do |referrer, pages|
        puts "\n#{referrer.url}"
        
        pages.each do |page|
          puts "  HTTP #{page.code} #{page.url}"
        end
      end
    end
  end
end
