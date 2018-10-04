json.pokemon do
  json.extract! @pokemon, :id, :name, :attack, :defense, :poke_type, :moves
  json.image_url asset_path(@pokemon.image_url)
end

json.items do
  @items.each do |item|
  json.set! item.id do
      json.extract! item, :id, :name, :pokemon_id, :price, :happiness, :image_url
    end
  end
end


# json.items @item do
#
# end
