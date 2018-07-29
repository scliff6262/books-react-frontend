class BooksController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    @books = Book.all
    respond_to do |f|
      f.json { render json: @books }
    end
  end

  def show
    @book = Book.find(params[:id])
    respond_to do |f|
      f.json { render json: @book }
    end
  end

  def create
    binding.pry
    @book = Book.new(book_params)
    if @book.save
      respond_to do |f|
        f.json { render json: @book }
      end
    end
    binding.pry
  end

  def destroy
    @book = Book.find(params[:id])
    @book.destroy
  end

  private

  def book_params
    params.require(:book).permit(:author, :title, :img_link)
  end

end
