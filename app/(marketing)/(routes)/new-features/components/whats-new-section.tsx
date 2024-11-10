// ... (previous imports remain the same)

// Dans la section qui affiche les features, modifiez le lien "Learn more" :

<Link 
  href={`/new-features/${index + 1}`}
  className="inline-flex items-center text-gray-900 font-medium hover:text-blue-600 transition-colors group"
>
  Learn more
  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
</Link>

// ... (rest of the file remains the same)